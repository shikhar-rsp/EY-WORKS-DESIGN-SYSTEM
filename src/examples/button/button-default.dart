import 'package:flutter/material.dart';

class ButtonDefault extends StatelessWidget {
  const ButtonDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color(0xFFF8785E), // --primary
        foregroundColor: const Color(0xFFFFFFFF), // --primary-foreground
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: const EdgeInsets.symmetric(horizontal: 16),
        minimumSize: const Size(40, 36),
        textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
      ),
      child: const Text('Click me'),
    );
  }
}
