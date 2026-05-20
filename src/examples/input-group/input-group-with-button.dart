import 'package:flutter/material.dart';

class InputGroupWithButton extends StatelessWidget {
  const InputGroupWithButton({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      height: 36,
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF),
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: const Color(0xFFD1D5DB)),
        ),
        child: Row(
          children: [
            const Expanded(
              child: TextField(
                decoration: InputDecoration(
                  hintText: 'Paste or type URL…',
                  hintStyle: TextStyle(color: Color(0xFF9CA3AF), fontSize: 14),
                  border: InputBorder.none,
                  contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                ),
                style: TextStyle(fontSize: 14, color: Color(0xFF111827)),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(2),
              child: ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFF8785E),
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  minimumSize: const Size(0, 32),
                  textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
                  elevation: 0,
                ),
                child: const Text('Copy'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
