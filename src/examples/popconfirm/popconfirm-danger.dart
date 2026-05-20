import 'package:flutter/material.dart';

class PopconfirmDanger extends StatefulWidget {
  const PopconfirmDanger({super.key});

  @override
  State<PopconfirmDanger> createState() => _PopconfirmDangerState();
}

class _PopconfirmDangerState extends State<PopconfirmDanger> {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => _showPopconfirm(context),
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color(0xFFCC0000), // --destructive
        foregroundColor: const Color(0xFFFFFFFF), // --destructive-foreground
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: const EdgeInsets.symmetric(horizontal: 16),
        minimumSize: const Size(40, 36),
        textStyle: const TextStyle(
          fontFamily: 'Lexend',
          fontSize: 14,
          fontWeight: FontWeight.w500,
        ),
      ),
      child: const Text('Delete'),
    );
  }

  void _showPopconfirm(BuildContext context) {
    showDialog(
      context: context,
      barrierColor: Colors.transparent,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFFFFFFFF), // --background
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        ),
        title: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Icon(Icons.warning_amber_rounded, color: Color(0xFFCA8A04), size: 16), // --warning-bold
            const SizedBox(width: 8),
            const Expanded(
              child: Text(
                'Delete the task',
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF2E2B2B), // --foreground
                ),
              ),
            ),
          ],
        ),
        content: const Text(
          'Are you sure to delete this task?',
          style: TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            style: TextButton.styleFrom(
              foregroundColor: const Color(0xFF2E2B2B),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500),
            ),
            child: const Text('No'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.of(ctx).pop(),
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFCC0000), // --destructive
              foregroundColor: const Color(0xFFFFFFFF),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
              minimumSize: const Size(40, 28),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500),
            ),
            child: const Text('Yes'),
          ),
        ],
      ),
    );
  }
}
