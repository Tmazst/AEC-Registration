from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField,SubmitField, TextAreaField,BooleanField, SelectField,DateField, URLField,TelField,RadioField,FloatField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError, Optional
from flask_login import current_user
from flask_wtf.file import FileField , FileAllowed,FileRequired
# from wtforms.fields.html5 import DateField,DateTimeField


class Register(FlaskForm):

    name = StringField('name', validators=[DataRequired(),Length(min=2,max=20)])
    email = StringField('email', validators=[DataRequired(),Email()])
    password = PasswordField('password', validators=[DataRequired(), Length(min=8, max=64)])
    confirm = PasswordField('confirm', validators=[DataRequired(),EqualTo('password'), Length(min=8, max=64)])
    admin_bool = BooleanField('Register as Admin?')

    submit = SubmitField('Create Account!')

    def validate_email(self,email):
        from app import db, User, app

        # with db.init_app(app):
        user_email = User.query.filter_by(email = self.email.data).first()
        if user_email:
            return ValidationError(f"Email already registered in this platform")


class UserAccountForm(FlaskForm):

    address = StringField('Physical Address')
    contacts = TelField('Phone Number', validators=[DataRequired()])
    church_local = StringField('Your Local Church', validators=[DataRequired()])
    church_region = SelectField('Church Region',choices=[("Eswatini", "Eswatini"),("KZN", "KZN"),
                                                         ("Eastern Cape", "Eastern Cape"),("Gauteng", "Gauteng"),("Botswana", "Botswana"),("Other", "Other")], validators=[DataRequired()])
    church_circuit = StringField('Circuit', validators=[DataRequired()])
    gender = SelectField('Gender',choices=[("Male", "Male"),("Female", "Female")])
    pastor = SelectField('Are You a Pastor?',choices=[("None", "None"),("Pastor", "Pastor"),("Reverend", "Reverend"),("Bishop", "Bishop")])
    age_group = SelectField('Group',choices=[("Youth", "Youth"),("Young Adults", "Young Adults"),("Mother", "Mother"),("Father", "Father"),("Sunday School", "Sunday School")])
    other = StringField('')
    other2 = StringField('')
    other3 = StringField('')
    image = FileField('Profile Picture',validators=[FileAllowed(['jpg', 'png', 'webp'], 'Images only!')])
    submit = SubmitField('Update')


class OpenEventForm(FlaskForm):

    start_date = DateField('Start Date (Event)',validators=[DataRequired()])
    end_date = DateField('End Date',validators=[DataRequired()])
    event_title = StringField('Services Title', validators=[DataRequired()])
    event_abbr = StringField('Abbreviation (Optional)')#
    event_theme = StringField('Services Theme (Optional)')
    event_venue = StringField('Venue', validators=[DataRequired()])#
    registration_group1 = SelectField('Select Group',
                            choices=[("Adults (13 years & Above)", "Adults (13 years & Above)"),("Students", "Students"),("Sunday School (12 years & below)", "Sunday School (12 years & below)")])
    reg_fee_amnt1 = FloatField("Amount", validators=[Optional()])
    registration_group2 = SelectField('Select Group',
                            choices=[("Adults (13 years & Above)", "Adults (13 years & Above)"),("Students", "Students"),("Sunday School (12 years & below)", "Sunday School (12 years & below)")])
    reg_fee_amnt2 = FloatField("Amount", validators=[Optional()])
    registration_group3 = SelectField('Select Group',
                            choices=[("Adults (13 years & Above)", "Adults (13 years & Above)"),("Students", "Students"),("Sunday School (12 years & below)", "Sunday School (12 years & below)")])
    reg_fee_amnt3 = FloatField("Amount", validators=[Optional()])
    event_other_info = StringField('Other Info')
    submit = SubmitField('Submit')


class RegistrationsForm(FlaskForm):

    transaction_id = StringField('Transaction Reference No. (optional)')
    pop_image = FileField('Upload Proof of Payment', validators=[FileRequired()])
    payment_platform = SelectField('Payment Platform',
                                  choices=[("Mobile Money", "Mobile Money"),("eMali", "eMali"),("Instant Money", "Instant Money"), ("FNB", "FNB"),
                                           ("Standard Bank", "Standard Bank"),("Eswatini Bank", "Eswatini Bank"),("Building Society", "Building Society")])
    
    denom_structure = SelectField('Denominational Structure',
                            choices=[("--", "--"),("Board", "Board"),("Women's Committee", "Women's Committee"),("Men's Committee", "Men's Committee"),("Youth Committee", "Youth Committee")
                                     ,("Young Adults' Committee", "Young Adults' Committee"),("Sunday School", "Sunday School")])
    special_diet_bool = RadioField('Special Diet?',choices=[(0, "No"),(1, "Yes")])
    special_diet = StringField('Please Specify')
    accommodation_bool = BooleanField('Accommodation Required?')
    accommodation_add_info = RadioField('Accommodation (Will you be staying at the conference venue?")',choices=[(0, "No"),(1, "Yes")])
    submit = SubmitField('Submit')


class Login(FlaskForm):
    email = StringField('email', validators=[DataRequired(),Email()])
    password = PasswordField('password', validators=[DataRequired(), Length(min=8, max=64)])
    submit = SubmitField('Login')


class Contact_Form(FlaskForm):

    name = StringField('name')
    email = StringField('email', validators=[DataRequired(),Email()])
    subject = StringField("subject")
    message = TextAreaField("Message",validators=[Length(min=8, max=2000)])
    submit = SubmitField("Send")


class Reset(FlaskForm):

    new_password = PasswordField('New password', validators=[DataRequired(), Length(min=8, max=64)])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('new_password'), Length(min=8, max=64)])

    reset = SubmitField('Reset')


class Reset_Request(FlaskForm):

    email = StringField('email', validators=[DataRequired(), Email()])
    reset = SubmitField('Submit')

    # def validate_email(self,email):
    #     user = user.query.filter_by