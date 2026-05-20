import 'package:flutter/material.dart';

class SegmentedDefault extends StatefulWidget {
  const SegmentedDefault({super.key});

  @override
  State<SegmentedDefault> createState() => _SegmentedDefaultState();
}

class _SegmentedDefaultState extends State<SegmentedDefault> {
  String _selected = 'day';

  final List<Map<String, String>> _items = const [
    {'value': 'day', 'label': 'Day'},
    {'value': 'week', 'label': 'Week'},
    {'value': 'month', 'label': 'Month'},
  ];

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Container(
          height: 36,
          decoration: BoxDecoration(
            color: const Color(0xFFFAFAFA),
            borderRadius: BorderRadius.circular(8),
          ),
          padding: const EdgeInsets.all(4),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: _items.map((item) {
              final isActive = _selected == item['value'];
              return GestureDetector(
                onTap: () => setState(() => _selected = item['value']!),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 150),
                  height: 28,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  margin: const EdgeInsets.only(right: 4),
                  decoration: BoxDecoration(
                    color: isActive ? const Color(0xFFFFFFFF) : Colors.transparent,
                    borderRadius: BorderRadius.circular(4),
                    boxShadow: isActive
                        ? [
                            BoxShadow(
                              color: Colors.black.withOpacity(0.1),
                              blurRadius: 3,
                              offset: const Offset(0, 1),
                            )
                          ]
                        : null,
                  ),
                  child: Center(
                    child: Text(
                      item['label']!,
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: isActive ? FontWeight.w600 : FontWeight.w500,
                        color: isActive
                            ? const Color(0xFF2E2B2B)
                            : const Color(0xFF7A7272),
                      ),
                    ),
                  ),
                ),
              );
            }).toList(),
          ),
        ),
      ),
    );
  }
}
