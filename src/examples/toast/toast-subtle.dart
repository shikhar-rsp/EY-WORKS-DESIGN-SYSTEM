import 'package:flutter/material.dart';

class ToastSubtle extends StatelessWidget {
  const ToastSubtle({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 480,
      padding: const EdgeInsets.all(8), // --space-100
      decoration: BoxDecoration(
        color: Colors.white, // --background (subtle = no tint)
        borderRadius: BorderRadius.circular(8), // --radius-medium
        boxShadow: const [
          BoxShadow(color: Color(0x4F1E1F21), blurRadius: 1, offset: Offset(0, 1)),
        ],
      ),
      child: Row(
        children: [
          const Icon(Icons.warning_amber_rounded, color: Color(0xFFD97706), size: 24), // --warning
          const SizedBox(width: 16),
          const Expanded(
            child: Text(
              'Your session will expire in 5 minutes.',
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
              'Extend',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                color: Color(0xFFF8785E), // --primary
              ),
            ),
          ),
        ],
      ),
    );
  }
}
