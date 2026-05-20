import 'package:flutter/material.dart';

class InputDisabled extends StatelessWidget {
  const InputDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return const SizedBox(
      width: 256,
      child: Padding(
        padding: EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('Username',
              style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))),
            SizedBox(height: 6),
            TextField(
              enabled: false,
              decoration: InputDecoration(
                hintText: 'Cannot edit',
                hintStyle: TextStyle(color: Color(0x4F272424)), // --disabled
                contentPadding: EdgeInsets.symmetric(horizontal: 12),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(8)),
                  borderSide: BorderSide(color: Color(0x24272424)), // --disabled-border
                ),
                disabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(8)),
                  borderSide: BorderSide(color: Color(0x24272424)),
                ),
                isDense: true, filled: true, fillColor: Color(0xFFFFFFFF),
              ),
              style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0x4F272424)),
            ),
          ],
        ),
      ),
    );
  }
}
