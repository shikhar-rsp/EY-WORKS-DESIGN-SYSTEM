import 'package:flutter/material.dart';

class TextareaDefault extends StatelessWidget {
  const TextareaDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      maxLines: 4,
      decoration: InputDecoration(
        hintText: 'Type your message here…',
        hintStyle: const TextStyle(
          color: Color(0xFFADA5A5), // --placeholder
          fontFamily: 'Lexend',
          fontSize: 14,
        ),
        filled: true,
        fillColor: const Color(0xFFFFFFFF), // --background
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 16, // --space-200
          vertical: 12,   // --space-150
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8), // --radius-medium
          borderSide: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: const BorderSide(color: Color(0xFF8290DD), width: 2), // --ring
        ),
      ),
      style: const TextStyle(
        fontFamily: 'Lexend',
        fontSize: 14,
        color: Color(0xFF2E2B2B), // --foreground
      ),
    );
  }
}
