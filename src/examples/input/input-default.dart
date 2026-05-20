import 'package:flutter/material.dart';

class InputDefault extends StatelessWidget {
  const InputDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          // Bare input
          const TextField(
            decoration: InputDecoration(
              hintText: 'Enter text…',
              hintStyle: TextStyle(color: Color(0xFFC7C6C6)), // --placeholder
              contentPadding: EdgeInsets.symmetric(horizontal: 12), // --space-150
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)), // --radius-medium
                borderSide: BorderSide(color: Color(0xFFEBE9E8)), // --border
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFFEBE9E8)),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFF8290DD), width: 2), // --ring
              ),
              isDense: true, filled: true, fillColor: Color(0xFFFFFFFF),
            ),
            style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
          ),
          const SizedBox(height: 16),
          // With Field label + description
          const Text('Email address',
            style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
          const SizedBox(height: 6),
          const TextField(
            keyboardType: TextInputType.emailAddress,
            decoration: InputDecoration(
              hintText: 'you@example.com',
              hintStyle: TextStyle(color: Color(0xFFC7C6C6)),
              contentPadding: EdgeInsets.symmetric(horizontal: 12),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFFEBE9E8)),
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFFEBE9E8)),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFF8290DD), width: 2),
              ),
              isDense: true, filled: true, fillColor: Color(0xFFFFFFFF),
            ),
            style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
          ),
          const SizedBox(height: 4),
          const Text("We'll never share your email.",
            style: TextStyle(fontFamily: 'Lexend', fontSize: 12, height: 1.625, color: Color(0xFF7A7272))),
        ],
      ),
    );
  }
}
