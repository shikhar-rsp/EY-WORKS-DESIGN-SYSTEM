import 'package:flutter/material.dart';

class AvatarDefault extends StatelessWidget {
  const AvatarDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 32, height: 32,
      decoration: const BoxDecoration(
        color: Color(0xFFFEE4DF), // --primary-subtle
        shape: BoxShape.circle,
      ),
      alignment: Alignment.center,
      child: const Text(
        'MH',
        style: TextStyle(
          fontFamily: 'Lexend',
          fontSize: 12,
          fontWeight: FontWeight.w500,
          color: Color(0xFF2E2B2B), // --foreground
        ),
      ),
    );
  }
}
