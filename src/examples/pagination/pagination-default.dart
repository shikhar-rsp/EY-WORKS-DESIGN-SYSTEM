import 'package:flutter/material.dart';

class PaginationDefault extends StatefulWidget {
  const PaginationDefault({super.key});

  @override
  State<PaginationDefault> createState() => _PaginationDefaultState();
}

class _PaginationDefaultState extends State<PaginationDefault> {
  int _activePage = 2;

  Widget _pageLink(int page) {
    final isActive = _activePage == page;
    return GestureDetector(
      onTap: () => setState(() => _activePage = page),
      child: Container(
        width: 36,
        height: 36,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8), // --radius-medium
          border: Border.all(
            color: isActive ? const Color(0xFFEBE9E8) : Colors.transparent, // --border
          ),
          color: isActive ? const Color(0xFFFFFFFF) : Colors.transparent, // --background
        ),
        child: Text(
          '$page',
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 14,
            fontWeight: FontWeight.w500,
            color: Color(0xFF2E2B2B), // --foreground
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // Previous
        Container(
          height: 36,
          padding: const EdgeInsets.symmetric(horizontal: 12),
          alignment: Alignment.center,
          child: const Text(
            '← Previous',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF2E2B2B),
            ),
          ),
        ),
        const SizedBox(width: 4),
        _pageLink(1),
        const SizedBox(width: 4),
        _pageLink(2),
        const SizedBox(width: 4),
        _pageLink(3),
        const SizedBox(width: 4),
        // Ellipsis
        const SizedBox(
          width: 36,
          height: 36,
          child: Center(
            child: Text('···', style: TextStyle(color: Color(0xFF7A7272), fontSize: 14)),
          ),
        ),
        const SizedBox(width: 4),
        _pageLink(10),
        const SizedBox(width: 4),
        Container(
          height: 36,
          padding: const EdgeInsets.symmetric(horizontal: 12),
          alignment: Alignment.center,
          child: const Text(
            'Next →',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF2E2B2B),
            ),
          ),
        ),
      ],
    );
  }
}
