import 'package:flutter/material.dart';

class FieldDefault extends StatelessWidget {
  const FieldDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text(
            'Email',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              height: 1,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
          const SizedBox(height: 6), // --space-075
          const TextField(
            decoration: InputDecoration(
              hintText: 'you@example.com',
              hintStyle: TextStyle(color: Color(0xFFC7C6C6)), // --placeholder
              contentPadding: EdgeInsets.symmetric(horizontal: 16), // --space-200
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)), // --radius-medium
                borderSide: BorderSide(color: Color(0xFFADA5A5)), // --border-input
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFFADA5A5)), // --border-input
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFF8290DD), width: 2), // --ring
              ),
              isDense: true,
              filled: true,
              fillColor: Color(0xFFFFFFFF), // --background
            ),
            keyboardType: TextInputType.emailAddress,
            style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
          ),
          const SizedBox(height: 6),
          const Text(
            'We\'ll never share your email.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 12,
              height: 1.625,
              color: Color(0xFF7A7272), // --muted-foreground
            ),
          ),
        ],
      ),
    );
  }
}
