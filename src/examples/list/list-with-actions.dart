import 'package:flutter/material.dart';

class ListWithActions extends StatelessWidget {
  const ListWithActions({super.key});

  @override
  Widget build(BuildContext context) {
    final members = [
      {'name': 'Jane Doe', 'role': 'Product Designer', 'color': const Color(0xFFF8785E)},
      {'name': 'Marcus Lee', 'role': 'Frontend Engineer', 'color': const Color(0xFF3BBFB2)},
      {'name': 'Sofia Reyes', 'role': 'Engineering Manager', 'color': const Color(0xFF9B87F5)},
    ];

    return Container(
      constraints: const BoxConstraints(maxWidth: 448),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: List.generate(members.length, (index) {
          final member = members[index];
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
                CircleAvatar(
                  radius: 16,
                  backgroundColor: member['color'] as Color,
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        member['name'] as String,
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
                        member['role'] as String,
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
                const SizedBox(width: 12),
                OutlinedButton(
                  onPressed: () {},
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                    minimumSize: Size.zero,
                    tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                    side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
                    foregroundColor: const Color(0xFF2E2B2B), // --foreground
                    backgroundColor: const Color(0xFFFFFFFF), // --background
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8), // --radius-medium
                    ),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  child: const Text('Edit'),
                ),
              ],
            ),
          );
        }),
      ),
    );
  }
}
