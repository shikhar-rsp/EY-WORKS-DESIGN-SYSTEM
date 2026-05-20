import 'package:flutter/material.dart';

class ButtonSizes extends StatelessWidget {
  const ButtonSizes({super.key});

  @override
  Widget build(BuildContext context) {
    const sizes = [
      (label: 'sm', height: 32.0, name: 'Small'),
      (label: 'default', height: 36.0, name: 'Default'),
      (label: 'lg', height: 40.0, name: 'Large'),
    ];

    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: sizes.map((s) => Padding(
        padding: const EdgeInsets.only(right: 16),
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFFF8785E),
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                padding: const EdgeInsets.symmetric(horizontal: 16),
                minimumSize: Size(0, s.height),
                fixedSize: Size.fromHeight(s.height),
                textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
              ),
              child: Text(s.name),
            ),
            const SizedBox(height: 4),
            Text(s.label, style: const TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272))),
          ],
        ),
      )).toList(),
    );
  }
}
