import 'package:flutter/material.dart';

class AlertDestructive extends StatelessWidget {
  const AlertDestructive({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(maxWidth: 512),
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0x80CC0000)), // --destructive/50
        borderRadius: BorderRadius.circular(16), // --radius-large
      ),
      padding: const EdgeInsets.all(16), // --space-200
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.only(top: 1),
            child: Icon(
              Icons.cancel_outlined,
              size: 16,
              color: Color(0xFFCC0000), // --destructive
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Error',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFFCC0000), // --destructive
                    fontFamily: 'Lexend',
                    height: 1,
                    letterSpacing: -0.15,
                  ),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Your session has expired. Please log in again.',
                  style: TextStyle(
                    fontSize: 14,
                    color: Color(0xFFCC0000), // --destructive
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
