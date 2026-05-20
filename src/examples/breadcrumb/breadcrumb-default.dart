import 'package:flutter/material.dart';

class BreadcrumbDefault extends StatelessWidget {
  const BreadcrumbDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: 'breadcrumb',
      child: Wrap(
        spacing: 4,
        crossAxisAlignment: WrapCrossAlignment.center,
        children: [
          GestureDetector(
            onTap: () {},
            child: const Text(
              'Home',
              style: TextStyle(
                fontFamily: 'Lexend', fontSize: 14,
                color: Color(0xFF7A7272), // --muted-foreground
              ),
            ),
          ),
          const Text('›', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
          GestureDetector(
            onTap: () {},
            child: const Text(
              'Components',
              style: TextStyle(
                fontFamily: 'Lexend', fontSize: 14,
                color: Color(0xFF7A7272),
              ),
            ),
          ),
          const Text('›', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
          const Text(
            'Breadcrumb',
            style: TextStyle(
              fontFamily: 'Lexend', fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
        ],
      ),
    );
  }
}
