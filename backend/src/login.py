# from flask import Flask, jsonify, request, session, redirect, url_for
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow

# app = Flask(__name__)
# CORS(app)

# app.config['SECRET_KEY'] = 'admin1'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/agencia'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
# ma = Marshmallow(app)

# class Usuario(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(100), nullable=False,unique=True)
#     password = db.Column(db.String(100), nullable=False)
#     rol = db.Column(db.String(20), nullable=False)

# class UsuarioSchema(ma.Schema):
#     class Meta:
#         fields = ('id','email','password','rol')

# usuario_schema = UsuarioSchema()

# @app.route('/', methods = ['POST'])
# def login():
#     if 'email' in request.json and 'password' in request.json:
#         email = request.json['email']
#         password = request.json['password']

#         usuario = Usuario.query.filter_by(email=email, password=password).first()

#         if usuario:
#             session['logueado'] = True
#             session[id] = usuario.id
            
#             if usuario.rol == 'admin':
#                 return redirect(url_for('admin_dashboard'))
#             elif usuario.rol == 'usuario_normal':
#                 return redirect(url_for('index'))

#         return jsonify({'message': 'Credenciales inválidas'}), 401

# @app.route('/admin_dashboard')
# def admin_dashboard():
#     if 'logueado' in session and session['logueado'] and 'id' in session:
#         usuario = Usuario.query.get(session['id'])

#         if usuario and usuario.rol == 'admin':
#             return jsonify({'message': 'Bienvenida/o, admin'})

#     return jsonify({'message': 'Acceso no autorizado'}), 401

# @app.route('/index')
# def index():
#     if 'logueado' in session and session['logueado'] and 'id' in session:
#         usuario = Usuario.query.get(session['id'])

#         if usuario and usuario.rol == 'usuario_normal':
#             return jsonify({'message': 'Bienvenida/o!'})

#     return jsonify({'message': 'Acceso no autorizado'}), 401

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)