import 'package:flutter/material.dart';

class KbdGroupExample extends StatelessWidget {
  const KbdGroupExample({super.key});

  Widget _buildKey(String label) {
    return Container(
      height: 24,
      constraints: const BoxConstraints(minWidth: 24),
      padding: const EdgeInsets.symmetric(horizontal: 8), // --space-100
      decoration: BoxDecoration(
        color: const Color(0xFFFAFAFA), // --muted
        borderRadius: BorderRadius.circular(4), // --radius-small
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
      ),
      child: Center(
        child: Text(
          label,
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            fontWeight: FontWeight.w500,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            _buildKey('⌘'),
            const SizedBox(width: 4), // --space-050
            _buildKey('K'),
          ],
        ),
        const SizedBox(height: 12),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            _buildKey('⌃'),
            const SizedBox(width: 4),
            _buildKey('⇧'),
            const SizedBox(width: 4),
            _buildKey('P'),
          ],
        ),
      ],
    );
  }
}
