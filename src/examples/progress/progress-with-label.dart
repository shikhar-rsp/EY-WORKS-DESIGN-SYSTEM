import 'package:flutter/material.dart';

class ProgressWithLabel extends StatelessWidget {
  const ProgressWithLabel({super.key});

  @override
  Widget build(BuildContext context) {
    const double value = 0.66;
    const int pct = 66;

    return SizedBox(
      width: 256,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Upload progress',
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 14,
                  color: Color(0xFF2E2B2B), // --foreground
                ),
              ),
              Text(
                '$pct%',
                style: const TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 14,
                  color: Color(0xFF7A7272), // --muted-foreground
                ),
              ),
            ],
          ),
          const SizedBox(height: 12), // --space-150
          LinearProgressIndicator(
            value: value,
            backgroundColor: const Color(0xFFF4F3F2), // --muted
            valueColor: const AlwaysStoppedAnimation<Color>(
              Color(0xFFF8785E), // --primary
            ),
            borderRadius: BorderRadius.circular(99), // --radius-full
            minHeight: 8,
          ),
        ],
      ),
    );
  }
}
