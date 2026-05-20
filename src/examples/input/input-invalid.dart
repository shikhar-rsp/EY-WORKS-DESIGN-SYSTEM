import 'package:flutter/material.dart';

class InputInvalid extends StatelessWidget {
  const InputInvalid({super.key});

  @override
  Widget build(BuildContext context) {
    return const SizedBox(
      width: 256,
      child: Padding(
        padding: EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('Password',
              style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFFCC0000))),
            SizedBox(height: 6),
            TextField(
              obscureText: true,
              decoration: InputDecoration(
                hintText: 'abc',
                contentPadding: EdgeInsets.symmetric(horizontal: 12),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(8)),
                  borderSide: BorderSide(color: Color(0xFFCC0000), width: 1.5), // --destructive
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(8)),
                  borderSide: BorderSide(color: Color(0xFFCC0000), width: 1.5),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(8)),
                  borderSide: BorderSide(color: Color(0xFFCC0000), width: 2),
                ),
                isDense: true, filled: true, fillColor: Color(0xFFFFFFFF),
                errorText: 'Must be at least 8 characters.',
                errorStyle: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFFCC0000)),
              ),
              style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
            ),
          ],
        ),
      ),
    );
  }
}
