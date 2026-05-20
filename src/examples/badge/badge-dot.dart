import 'package:flutter/material.dart';

class BadgeDot extends StatelessWidget {
  const BadgeDot({super.key});

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        // Bell icon
        const Icon(
          Icons.notifications_outlined,
          size: 24,
          color: Color(0xFF2E2B2B), // --foreground
        ),
        // Dot indicator
        Positioned(
          top: -2,
          right: -2,
          child: Container(
            width: 10,
            height: 10,
            decoration: BoxDecoration(
              color: const Color(0xFFCC0000), // --destructive
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 2),
            ),
          ),
        ),
      ],
    );
  }
}
