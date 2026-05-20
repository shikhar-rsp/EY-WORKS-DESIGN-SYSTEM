import 'package:flutter/material.dart';

class ListDefault extends StatelessWidget {
  const ListDefault({super.key});

  @override
  Widget build(BuildContext context) {
    final items = [
      {'title': 'Invoice #1042', 'description': 'Sent on April 3, 2026 · \$240.00'},
      {'title': 'Invoice #1043', 'description': 'Sent on April 7, 2026 · \$120.00'},
      {'title': 'Invoice #1044', 'description': 'Sent on April 10, 2026 · \$360.00'},
    ];

    return Container(
      constraints: const BoxConstraints(maxWidth: 448),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: List.generate(items.length, (index) {
          return Container(
            decoration: BoxDecoration(
              color: const Color(0xFFFFFFFF), // --background
              border: index > 0
                  ? const Border(top: BorderSide(color: Color(0xFFEBE9E8))) // --border
                  : null,
            ),
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        items[index]['title']!,
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
                        items[index]['description']!,
                        style: const TextStyle(
                          fontFamily: 'Lexend',
                          fontSize: 12,
                          color: Color(0xFF7A7272), // --muted-foreground
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        }),
      ),
    );
  }
}
