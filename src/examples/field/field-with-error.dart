import 'package:flutter/material.dart';

class FieldWithError extends StatelessWidget {
  const FieldWithError({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text(
            'Email',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              height: 1,
              color: Color(0xFFCC0000), // --destructive
            ),
          ),
          const SizedBox(height: 6), // --space-075
          const TextField(
            controller: null,
            decoration: InputDecoration(
              hintText: 'not-an-email',
              contentPadding: EdgeInsets.symmetric(horizontal: 16),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFFCC0000), width: 1.5), // --destructive
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFFCC0000), width: 1.5),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide(color: Color(0xFFCC0000), width: 2),
              ),
              isDense: true,
              filled: true,
              fillColor: Color(0xFFFFFFFF),
            ),
            keyboardType: TextInputType.emailAddress,
            style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
          ),
          const SizedBox(height: 6),
          const Text(
            'Please enter a valid email address.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 12,
              color: Color(0xFFCC0000), // --destructive
            ),
          ),
        ],
      ),
    );
  }
}
