import 'package:flutter/material.dart';

class KbdDefault extends StatelessWidget {
  const KbdDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 24,
      constraints: const BoxConstraints(minWidth: 24),
      padding: const EdgeInsets.symmetric(horizontal: 8), // --space-100
      decoration: BoxDecoration(
        color: const Color(0xFFFAFAFA), // --muted
        borderRadius: BorderRadius.circular(4), // --radius-small
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
      ),
      child: const Center(
        child: Text(
          '⌘',
          style: TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            fontWeight: FontWeight.w500,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
      ),
    );
  }
}
