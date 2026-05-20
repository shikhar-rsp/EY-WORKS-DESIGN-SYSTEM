import 'package:flutter/material.dart';

class ListBordered extends StatelessWidget {
  const ListBordered({super.key});

  @override
  Widget build(BuildContext context) {
    final events = [
      {'title': 'Component synced from Figma', 'meta': 'Button · 2 minutes ago'},
      {'title': 'Docs page generated', 'meta': 'List · 10 minutes ago'},
      {'title': 'Design token updated', 'meta': 'primary · 1 hour ago'},
    ];

    return Container(
      constraints: const BoxConstraints(maxWidth: 448),
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(16), // --radius-large
        color: const Color(0xFFFFFFFF), // --background
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // ListHeader
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: const BoxDecoration(
              border: Border(bottom: BorderSide(color: Color(0xFFEBE9E8))), // --border
            ),
            child: const Text(
              'Recent Activity',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                fontWeight: FontWeight.w600,
                color: Color(0xFF2E2B2B), // --foreground
              ),
            ),
          ),
          // List items
          ...List.generate(events.length, (index) {
            return Container(
              decoration: BoxDecoration(
                border: index > 0
                    ? const Border(top: BorderSide(color: Color(0xFFEBE9E8)))
                    : null,
              ),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    events[index]['title']!,
                    style: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: Color(0xFF2E2B2B), // --foreground
                    ),
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 2),
                  Text(
                    events[index]['meta']!,
                    style: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 12,
                      color: Color(0xFF7A7272), // --muted-foreground
                    ),
                  ),
                ],
              ),
            );
          }),
          // ListFooter
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: const BoxDecoration(
              border: Border(top: BorderSide(color: Color(0xFFEBE9E8))), // --border
            ),
            child: const Text(
              'Showing 3 of 24 events',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 12,
                color: Color(0xFF7A7272), // --muted-foreground
              ),
            ),
          ),
        ],
      ),
    );
  }
}
