import 'package:flutter/material.dart';

class DrawerDirections extends StatelessWidget {
  const DrawerDirections({super.key});

  void _open(BuildContext context, String direction) {
    final isVertical = direction == 'bottom' || direction == 'top';
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFFFFFFFF), // --background
      shape: RoundedRectangleBorder(
        borderRadius: isVertical
            ? const BorderRadius.vertical(top: Radius.circular(16))
            : BorderRadius.zero,
      ),
      builder: (ctx) => Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (isVertical)
              Center(
                child: Container(
                  width: 48, height: 6,
                  margin: const EdgeInsets.only(bottom: 16),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAFAFA), // --muted
                    borderRadius: BorderRadius.circular(99),
                  ),
                ),
              ),
            Text(
              'Drawer — $direction',
              style: const TextStyle(
                fontFamily: 'Lexend', fontSize: 18, fontWeight: FontWeight.w600,
                color: Color(0xFF2E2B2B), // --foreground
              ),
            ),
            const SizedBox(height: 4),
            Text(
              'Slides in from the $direction.',
              style: const TextStyle(
                fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272), // --muted-foreground
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              'Supports any content including forms, lists, or rich media.',
              style: TextStyle(fontSize: 14, color: Color(0xFF505258)), // --secondary-foreground
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity, height: 36,
              child: OutlinedButton(
                onPressed: () => Navigator.pop(ctx),
                style: OutlinedButton.styleFrom(
                  foregroundColor: const Color(0xFF2E2B2B),
                  side: const BorderSide(color: Color(0xFFEBE9E8)),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
                child: const Text('Close'),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 12,
      runSpacing: 12,
      children: ['bottom', 'top', 'left', 'right'].map((dir) {
        return OutlinedButton(
          onPressed: () => _open(context, dir),
          style: OutlinedButton.styleFrom(
            foregroundColor: const Color(0xFF2E2B2B),
            side: const BorderSide(color: Color(0xFFEBE9E8)),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            padding: const EdgeInsets.symmetric(horizontal: 16),
            minimumSize: const Size(40, 36),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
          child: Text(dir[0].toUpperCase() + dir.substring(1)),
        );
      }).toList(),
    );
  }
}
