import 'package:flutter/material.dart';

class SegmentedSizes extends StatefulWidget {
  const SegmentedSizes({super.key});

  @override
  State<SegmentedSizes> createState() => _SegmentedSizesState();
}

class _SegmentedSizesState extends State<SegmentedSizes> {
  String _selectedSm = 'day';
  String _selectedDefault = 'day';
  String _selectedLg = 'day';

  final List<Map<String, String>> _items = const [
    {'value': 'day', 'label': 'Day'},
    {'value': 'week', 'label': 'Week'},
    {'value': 'month', 'label': 'Month'},
  ];

  Widget _buildSegmented({
    required double height,
    required double itemHeight,
    required double horizontalPadding,
    required double fontSize,
    required String selected,
    required ValueChanged<String> onChanged,
  }) {
    return Container(
      height: height,
      decoration: BoxDecoration(
        color: const Color(0xFFFAFAFA),
        borderRadius: BorderRadius.circular(8),
      ),
      padding: const EdgeInsets.all(4),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: _items.map((item) {
          final isActive = selected == item['value'];
          return GestureDetector(
            onTap: () => onChanged(item['value']!),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 150),
              height: itemHeight,
              padding: EdgeInsets.symmetric(horizontal: horizontalPadding),
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
                    fontSize: fontSize,
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
    );
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _buildSegmented(
              height: 32,
              itemHeight: 24,
              horizontalPadding: 16,
              fontSize: 12,
              selected: _selectedSm,
              onChanged: (v) => setState(() => _selectedSm = v),
            ),
            const SizedBox(height: 8),
            const Text('sm', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            const SizedBox(height: 24),
            _buildSegmented(
              height: 36,
              itemHeight: 28,
              horizontalPadding: 16,
              fontSize: 14,
              selected: _selectedDefault,
              onChanged: (v) => setState(() => _selectedDefault = v),
            ),
            const SizedBox(height: 8),
            const Text('default', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
            const SizedBox(height: 24),
            _buildSegmented(
              height: 40,
              itemHeight: 32,
              horizontalPadding: 24,
              fontSize: 14,
              selected: _selectedLg,
              onChanged: (v) => setState(() => _selectedLg = v),
            ),
            const SizedBox(height: 8),
            const Text('lg', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272))),
          ],
        ),
      ),
    );
  }
}
