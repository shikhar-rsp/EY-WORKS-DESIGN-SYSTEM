import 'package:flutter/material.dart';

class ButtonDisabled extends StatelessWidget {
  const ButtonDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 12,
      children: [
        ElevatedButton(
          onPressed: null, // disabled
          style: ElevatedButton.styleFrom(
            disabledBackgroundColor: const Color(0xFFFFFFFF), // --disabled-surface
            disabledForegroundColor: const Color(0x4F272424), // --disabled
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            side: const BorderSide(color: Color(0xFFEBE9E8)),
            padding: const EdgeInsets.symmetric(horizontal: 16),
            minimumSize: const Size(0, 36),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
          child: const Text('Disabled'),
        ),
        OutlinedButton(
          onPressed: null,
          style: OutlinedButton.styleFrom(
            disabledForegroundColor: const Color(0x4F272424),
            side: const BorderSide(color: Color(0xFFEBE9E8)),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            padding: const EdgeInsets.symmetric(horizontal: 16),
            minimumSize: const Size(0, 36),
            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
          ),
          child: const Text('Disabled'),
        ),
      ],
    );
  }
}
