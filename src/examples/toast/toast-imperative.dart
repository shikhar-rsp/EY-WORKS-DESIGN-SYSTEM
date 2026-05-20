import 'package:flutter/material.dart';

class ToastImperative extends StatelessWidget {
  const ToastImperative({super.key});

  void _showSnackBar(BuildContext context, String message, Color color) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          message,
          style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
        ),
        backgroundColor: color,
        duration: const Duration(seconds: 4),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        ElevatedButton(
          onPressed: () => _showSnackBar(context, 'Profile updated successfully.', const Color(0xFF65A30D)),
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFF65A30D), // --success
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
          child: const Text('toast.success()'),
        ),
        ElevatedButton(
          onPressed: () => _showSnackBar(context, 'Failed to save changes.', const Color(0xFFCC0000)),
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFFCC0000), // --destructive
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
          child: const Text('toast.error()'),
        ),
        ElevatedButton(
          onPressed: () => _showSnackBar(context, 'A new version is available.', const Color(0xFF2D70CF)),
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFF2D70CF), // --info
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
          child: const Text('toast.info()'),
        ),
        ElevatedButton(
          onPressed: () => _showSnackBar(context, 'Your session expires in 5 minutes.', const Color(0xFFD97706)),
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFFD97706), // --warning
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
          child: const Text('toast.warning()'),
        ),
      ],
    );
  }
}
