import 'package:flutter/material.dart';

class InputGroupWithTextarea extends StatelessWidget {
  const InputGroupWithTextarea({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF),
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: const Color(0xFFD1D5DB)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Padding(
              padding: EdgeInsets.fromLTRB(12, 12, 12, 0),
              child: Text(
                'Message',
                style: TextStyle(
                  color: Color(0xFF6B7280),
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
            const TextField(
              maxLines: 3,
              decoration: InputDecoration(
                hintText: 'Write your message…',
                hintStyle: TextStyle(color: Color(0xFF9CA3AF), fontSize: 14),
                border: InputBorder.none,
                contentPadding: EdgeInsets.fromLTRB(12, 8, 12, 12),
              ),
              style: TextStyle(fontSize: 14, color: Color(0xFF111827)),
            ),
          ],
        ),
      ),
    );
  }
}
