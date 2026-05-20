import 'package:flutter/material.dart';

class PopconfirmPlacement extends StatefulWidget {
  const PopconfirmPlacement({super.key});

  @override
  State<PopconfirmPlacement> createState() => _PopconfirmPlacementState();
}

class _PopconfirmPlacementState extends State<PopconfirmPlacement> {
  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      onPressed: () => _showPopconfirm(context),
      style: OutlinedButton.styleFrom(
        foregroundColor: const Color(0xFF2E2B2B), // --foreground
        side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: const EdgeInsets.symmetric(horizontal: 16),
        minimumSize: const Size(40, 36),
        textStyle: const TextStyle(
          fontFamily: 'Lexend',
          fontSize: 14,
          fontWeight: FontWeight.w500,
        ),
      ),
      child: const Text('Bottom-start placement'),
    );
  }

  void _showPopconfirm(BuildContext context) {
    showDialog(
      context: context,
      barrierColor: Colors.transparent,
      builder: (ctx) => AlertDialog(
        alignment: Alignment.bottomLeft,
        backgroundColor: const Color(0xFFFFFFFF),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: Color(0xFFEBE9E8)),
        ),
        title: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Icon(Icons.warning_amber_rounded, color: Color(0xFFCA8A04), size: 16),
            const SizedBox(width: 8),
            const Expanded(
              child: Text(
                'Confirm action',
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF2E2B2B),
                ),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            style: TextButton.styleFrom(
              foregroundColor: const Color(0xFF2E2B2B),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500),
            ),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () => Navigator.of(ctx).pop(),
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFF8785E), // --primary
              foregroundColor: const Color(0xFFFFFFFF),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
              minimumSize: const Size(40, 28),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 12, fontWeight: FontWeight.w500),
            ),
            child: const Text('OK'),
          ),
        ],
      ),
    );
  }
}
