import 'package:flutter/material.dart';

class ButtonLink extends StatelessWidget {
  const ButtonLink({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () {},
      style: TextButton.styleFrom(
        foregroundColor: const Color(0xFFF8785E), // --primary
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: EdgeInsets.zero,
        minimumSize: const Size(0, 36),
        textStyle: const TextStyle(
          fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500,
          decoration: TextDecoration.underline,
        ),
      ),
      child: const Text('Read more'),
    );
  }
}
