import 'package:flutter/material.dart';

class ButtonWithIcon extends StatelessWidget {
  const ButtonWithIcon({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 12,
      children: [
        ElevatedButton.icon(
          onPressed: () {},
          icon: const Icon(Icons.arrow_back, size: 16),
          label: const Text('Back'),
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFFF8785E),
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            padding: const EdgeInsets.symmetric(horizontal: 16),
            minimumSize: const Size(0, 36),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
        ),
        ElevatedButton.icon(
          onPressed: () {},
          iconAlignment: IconAlignment.end,
          icon: const Icon(Icons.arrow_forward, size: 16),
          label: const Text('Next'),
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFFF8785E),
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            padding: const EdgeInsets.symmetric(horizontal: 16),
            minimumSize: const Size(0, 36),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
        ),
      ],
    );
  }
}
