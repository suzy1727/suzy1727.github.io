from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:COHEN1727@localhost/italy'   
db=SQLAlchemy(app)

class Data(db.Model):
        __tablename__="data"
        id=db.Column(db.Integer,primary_key=True)
        text_=db.Column(db.String(120),unique=True)
        email_=db.Column(db.String(120),unique=True)
        phone_=db.Column(db.Integer)
        #weight=db.Column(db.Integer)

        def __init__(self,text_,email_,phone_):
                self.text_=text_            
                self.email_=email_
                self.phone_=phone_
            #    self.weight=weight_

with app.app_context():
        db.create_all()


@app.route("/")
def index():
        return render_template("index.html")


@app.route("/thankyou",methods=['POST'])
def thankyou():
        if request.method=='POST':
            text=request.form["text"]
            email=request.form["email_name"]
            phone=request.form["phone_name"]
             # weight=request.form["weight_name"]
            print (email)
         #   data=Data (email,height,weight)
          #    db.session.add(data)
           #   db.session.commit()
            return render_template("thankyou.html")


if __name__=='__main__':
   app.debug=True
   app.run() 
   
