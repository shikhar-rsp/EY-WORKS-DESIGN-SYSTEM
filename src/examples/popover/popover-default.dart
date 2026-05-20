import 'package:flutter/material.dart';

class PopoverDefault extends StatefulWidget {
  const PopoverDefault({super.key});

  @override
  State<PopoverDefault> createState() => _PopoverDefaultState();
}

class _PopoverDefaultState extends State<PopoverDefault> {
  bool _isOpen = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        // Trigger button
        OutlinedButton(
          onPressed: () => setState(() => _isOpen = !_isOpen),
          style: OutlinedButton.styleFrom(
            backgroundColor: const Color(0xFFFFFFFF), // --background
            foregroundColor: const Color(0xFF2E2B2B), // --foreground
            side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8), // --radius-medium
            ),
            padding: const EdgeInsets.symmetric(horizontal: 16), // --space-200
            minimumSize: const Size(40, 36),
            textStyle: const TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
            ),
          ),
          child: const Text('Open Popover'),
        ),

        // Popover content
        if (_isOpen) ...[
          const SizedBox(height: 4),
          Container(
            width: 288,
            padding: const EdgeInsets.all(16), // --space-200
            decoration: BoxDecoration(
              color: const Color(0xFFFFFFFF), // --background
              borderRadius: BorderRadius.circular(16), // --radius-large
              border: Border.all(color: const Color(0xFFEBE9E8)), // --border
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.08),
                  blurRadius: 12,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Dimensions',
                  style: TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF2E2B2B), // --foreground
                  ),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Set the dimensions for the layer.',
                  style: TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 12,
                    color: Color(0xFF7A7272), // --muted-foreground
                  ),
                ),
                const SizedBox(height: 12),
                _row('Width', '100%'),
                const SizedBox(height: 8),
                _row('Height', 'auto'),
              ],
            ),
          ),
        ],
      ],
    );
  }

  Widget _row(String label, String value) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(label, style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272))),
        Text(value, style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
      ],
    );
  }
}
