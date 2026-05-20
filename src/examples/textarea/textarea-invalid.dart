import 'package:flutter/material.dart';

class TextareaInvalid extends StatelessWidget {
  const TextareaInvalid({super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      maxLines: 4,
      controller: TextEditingController(text: 'Invalid content here'),
      decoration: InputDecoration(
        hintText: 'Enter text',
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
        errorText: ' ', // shows error state
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8), // --radius-medium
          borderSide: const BorderSide(color: Color(0xFFCC0000)), // --destructive
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: const BorderSide(color: Color(0xFFCC0000)), // --destructive
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: const BorderSide(color: Color(0xFFCC0000), width: 2), // --destructive
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
