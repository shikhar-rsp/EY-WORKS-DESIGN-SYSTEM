import 'package:flutter/material.dart';

class BreadcrumbWithEllipsis extends StatelessWidget {
  const BreadcrumbWithEllipsis({super.key});

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 4,
      crossAxisAlignment: WrapCrossAlignment.center,
      children: [
        GestureDetector(
          onTap: () {},
          child: const Text('Home', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272))),
        ),
        const Text('›', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
        const Text('…', style: TextStyle(fontSize: 16, color: Color(0xFF7A7272), letterSpacing: 1)),
        const Text('›', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
        GestureDetector(
          onTap: () {},
          child: const Text('Navigation', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272))),
        ),
        const Text('›', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
        const Text(
          'Breadcrumb',
          style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B)),
        ),
      ],
    );
  }
}
