import 'package:flutter/material.dart';

class TooltipDefault extends StatelessWidget {
  const TooltipDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'Add to library',
      decoration: BoxDecoration(
        color: const Color(0xFFF8785E), // --primary
        borderRadius: BorderRadius.circular(4), // --radius-small
      ),
      textStyle: const TextStyle(
        fontFamily: 'Lexend',
        fontSize: 12,
        color: Color(0xFFFFFFFF), // --primary-foreground
      ),
      preferBelow: false,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(
          border: Border.all(color: const Color(0xFFEBE9E8)), // --border
          borderRadius: BorderRadius.circular(8), // --radius-medium
          color: Colors.white, // --background
        ),
        child: const Text(
          'Hover me',
          style: TextStyle(
            fontFamily: 'Lexend',
            fontSize: 14,
            color: Color(0xFF2E2B2B), // --foreground
          ),
        ),
      ),
    );
  }
}
