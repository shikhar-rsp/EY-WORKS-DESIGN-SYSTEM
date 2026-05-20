import 'package:flutter/material.dart';

class AlertDialogDestructive extends StatefulWidget {
  const AlertDialogDestructive({super.key});

  @override
  State<AlertDialogDestructive> createState() => _AlertDialogDestructiveState();
}

class _AlertDialogDestructiveState extends State<AlertDialogDestructive> {
  void _showDialog() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16), // --radius-large
          side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        ),
        backgroundColor: const Color(0xFFFFFFFF), // --background
        title: const Text(
          'Delete account',
          style: TextStyle(
            fontFamily: 'Lexend', fontSize: 18, fontWeight: FontWeight.w600,
            color: Color(0xFF2E2B2B), // --foreground
          ),
        ),
        content: const Text(
          'This will permanently delete your account and all associated data. '
          'You cannot undo this action.',
          style: TextStyle(
            fontFamily: 'Lexend', fontSize: 14, height: 1.6,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            style: TextButton.styleFrom(
              foregroundColor: const Color(0xFF2E2B2B),
              side: const BorderSide(color: Color(0xFFEBE9E8)),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              minimumSize: const Size(0, 36),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14),
            ),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.of(context).pop(),
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFCC0000), // --destructive
              foregroundColor: const Color(0xFFFFFFFF), // --destructive-foreground
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              minimumSize: const Size(0, 36),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14),
            ),
            child: const Text('Delete'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _showDialog,
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color(0xFFCC0000), // --destructive
        foregroundColor: const Color(0xFFFFFFFF), // --destructive-foreground
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: const EdgeInsets.symmetric(horizontal: 16),
        minimumSize: const Size(0, 36),
        textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
      ),
      child: const Text('Delete Account'),
    );
  }
}
