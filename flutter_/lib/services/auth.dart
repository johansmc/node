import 'dart:convert';

import 'package:http/http.dart' as http;

class AuthServices {
  final url = Uri.parse('http://localhost:3000/api/');
  Future<void> registro(String name, String email, String password) async {
    final url = Uri.parse('http://localhost:3000/api/crear');

    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({"names": "$name", "email": "$email", "password": "$password"}),

    );

     if (response.statusCode == 200 || response.statusCode == 201) {
      final data = jsonEncode(response.body);
      print(data);
    } else {
      print('Error al registrar: ${response.body}');
      throw Exception('Error en el registro');
    }
  }

  Future<void> ingreso(String email, String password) async {
    final url = Uri.parse('http://localhost:3000/api/login');

    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({"email": "$email", "password": "$password"}),
    );

    if (response.statusCode == 200 || response.statusCode == 201) {
      final data = jsonEncode(response.body);
      print(data);
    } else {
      print('Error al ingresar: ${response.body}');
      throw Exception('Error en el ingreso');
    }
  }

}