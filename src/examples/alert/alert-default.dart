import 'package:flutter/material.dart';

class AlertDefault extends StatelessWidget {
  const AlertDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(maxWidth: 512),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(16), // --radius-large
      ),
      padding: const EdgeInsets.all(16), // --space-200
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.only(top: 1),
            child: Icon(
              Icons.info_outline,
              size: 16,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Heads up!',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFF2E2B2B), // --foreground
                    fontFamily: 'Lexend',
                    height: 1,
                    letterSpacing: -0.15,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  'You can add components to your app using the CLI.',
                  style: const TextStyle(
                    fontSize: 14,
                    color: Color(0xFF505258), // --secondary-foreground
                    fontFamily: 'Lexend',
                    height: 1.5,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
