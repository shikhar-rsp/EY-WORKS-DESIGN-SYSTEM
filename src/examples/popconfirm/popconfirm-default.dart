import 'package:flutter/material.dart';

class PopconfirmDefault extends StatelessWidget {
  const PopconfirmDefault({super.key});

  void _showPopconfirm(BuildContext context) {
    showDialog(
      context: context,
      barrierColor: Colors.transparent,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFFFFFFFF), // --background
        surfaceTintColor: Colors.transparent,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16), // --radius-large
          side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
        ),
        contentPadding: const EdgeInsets.all(16),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Icon(
                  Icons.info_outline_rounded,
                  size: 16,
                  color: Color(0xFFFBBF24), // --warning-bold
                ),
                SizedBox(width: 8),
                Expanded(
                  child: Text(
                    'Delete this item?',
                    style: TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF2E2B2B), // --foreground
                      height: 1.4,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            // Description
            const Text(
              'This action cannot be undone.',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 12,
                color: Color(0xFF7A7272), // --muted-foreground
                height: 1.6,
              ),
            ),
            const SizedBox(height: 12),
            // Footer
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                OutlinedButton(
                  onPressed: () => Navigator.pop(ctx),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: const Color(0xFF2E2B2B), // --foreground
                    side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8), // --radius-medium
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    minimumSize: const Size(0, 28),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  child: const Text('Cancel'),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () => Navigator.pop(ctx),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF8785E), // --primary
                    foregroundColor: const Color(0xFFFFFFFF), // --primary-foreground
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8), // --radius-medium
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    minimumSize: const Size(0, 28),
                    elevation: 0,
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  child: const Text('Delete'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

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
      child: const Text('Delete item'),
    );
  }
}
