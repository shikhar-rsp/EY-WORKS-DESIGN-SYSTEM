import 'package:flutter/material.dart';

class DividerDefault extends StatelessWidget {
  const DividerDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Above the divider',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
          const SizedBox(height: 8),
          // Divider
          Divider(
            height: 1,
            thickness: 1,
            color: const Color(0xFFEBE9E8), // --border
          ),
          const SizedBox(height: 8),
          const Text(
            'Below the divider',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
        ],
      ),
    );
  }
}
