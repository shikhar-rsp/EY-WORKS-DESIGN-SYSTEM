import 'package:flutter/material.dart';

class ToastNoIcon extends StatelessWidget {
  const ToastNoIcon({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 480,
      padding: const EdgeInsets.all(8), // --space-100
      decoration: BoxDecoration(
        color: const Color(0xFFFFCCCC), // --accent-red-subtlest (danger solid)
        borderRadius: BorderRadius.circular(8), // --radius-medium
        boxShadow: const [
          BoxShadow(color: Color(0x4F1E1F21), blurRadius: 1, offset: Offset(0, 1)),
        ],
      ),
      child: Row(
        children: [
          const Expanded(
            child: Text(
              'Two orders have been duplicated.',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontWeight: FontWeight.w500,
                fontSize: 14,
                color: Color(0xFF2E2B2B), // --foreground
              ),
            ),
          ),
          TextButton(
            onPressed: () {},
            child: const Text(
              'Undo',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                color: Color(0xFFF8785E), // --primary
              ),
            ),
          ),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.close, size: 16, color: Color(0xFFADA5A5)), // --subtlest
          ),
        ],
      ),
    );
  }
}
