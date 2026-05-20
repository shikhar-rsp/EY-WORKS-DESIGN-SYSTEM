import 'package:flutter/material.dart';

class BadgeCount extends StatelessWidget {
  const BadgeCount({super.key});

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        // Avatar fallback
        Container(
          width: 32,
          height: 32,
          decoration: const BoxDecoration(
            color: Color(0xFFFAFAFA), // --muted
            shape: BoxShape.circle,
          ),
          alignment: Alignment.center,
          child: const Text(
            'JD',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 12,
              fontWeight: FontWeight.w500,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
        ),
        // Badge count indicator
        Positioned(
          top: -4,
          right: -4,
          child: Container(
            constraints: const BoxConstraints(minWidth: 18),
            height: 18,
            padding: const EdgeInsets.symmetric(horizontal: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFCC0000), // --destructive
              borderRadius: BorderRadius.circular(9999),
              border: Border.all(color: Colors.white, width: 2), // ring-background
            ),
            alignment: Alignment.center,
            child: const Text(
              '5',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 10,
                fontWeight: FontWeight.w600,
                color: Color(0xFFFFFFFF), // --destructive-foreground
                height: 1,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
