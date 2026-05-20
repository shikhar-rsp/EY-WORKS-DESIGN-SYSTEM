import 'package:flutter/material.dart';

class ToastSolid extends StatelessWidget {
  const ToastSolid({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 480,
      padding: const EdgeInsets.all(8), // --space-100
      decoration: BoxDecoration(
        color: const Color(0xFFECFCCB), // --accent-lime (success solid)
        borderRadius: BorderRadius.circular(8), // --radius-medium
        boxShadow: const [
          BoxShadow(color: Color(0x4F1E1F21), blurRadius: 1, offset: Offset(0, 1)),
        ],
      ),
      child: Row(
        children: [
          const Icon(Icons.check_circle, color: Color(0xFF65A30D), size: 24), // --success
          const SizedBox(width: 16), // --space-200
          const Expanded(
            child: Text(
              'Profile updated successfully.',
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
              'View',
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
