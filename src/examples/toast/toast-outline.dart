import 'package:flutter/material.dart';

class ToastOutline extends StatelessWidget {
  const ToastOutline({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 480,
      padding: const EdgeInsets.all(8), // --space-100
      decoration: BoxDecoration(
        color: Colors.white, // --background
        borderRadius: BorderRadius.circular(8), // --radius-medium
        border: Border.all(color: const Color(0xFF505EAC)), // --discovery
        boxShadow: const [
          BoxShadow(color: Color(0x4F1E1F21), blurRadius: 1, offset: Offset(0, 1)),
        ],
      ),
      child: Row(
        children: [
          const Icon(Icons.info, color: Color(0xFF2D70CF), size: 24), // --info
          const SizedBox(width: 16),
          const Expanded(
            child: Text(
              'A new version is available.',
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
              'Update now',
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
