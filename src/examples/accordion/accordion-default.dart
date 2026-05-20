import 'package:flutter/material.dart';

class AccordionDefault extends StatefulWidget {
  const AccordionDefault({super.key});

  @override
  State<AccordionDefault> createState() => _AccordionDefaultState();
}

class _AccordionItem {
  final String value;
  final String trigger;
  final String content;

  const _AccordionItem({
    required this.value,
    required this.trigger,
    required this.content,
  });
}

class _AccordionDefaultState extends State<AccordionDefault> {
  String _openValue = 'item-1';

  static const List<_AccordionItem> _items = [
    _AccordionItem(
      value: 'item-1',
      trigger: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    ),
    _AccordionItem(
      value: 'item-2',
      trigger: 'Is it styled?',
      content: "Yes. It comes with default styles that match the other components' aesthetic.",
    ),
    _AccordionItem(
      value: 'item-3',
      trigger: 'Is it animated?',
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
    ),
  ];

  void _toggle(String value) {
    setState(() {
      _openValue = _openValue == value ? '' : value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 448),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: _items.asMap().entries.map((entry) {
            final index = entry.key;
            final item = entry.value;
            final isOpen = _openValue == item.value;
            final isLast = index == _items.length - 1;

            return Container(
              decoration: BoxDecoration(
                border: isLast
                    ? null
                    : const Border(
                        bottom: BorderSide(color: Color(0xFFEBE9E8)), // --border
                      ),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  // Trigger
                  InkWell(
                    onTap: () => _toggle(item.value),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 16), // --space-200
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Expanded(
                            child: Text(
                              item.trigger,
                              style: const TextStyle(
                                fontFamily: 'Lexend',
                                fontSize: 14,
                                fontWeight: FontWeight.w500,
                                color: Color(0xFF2E2B2B), // --foreground
                              ),
                            ),
                          ),
                          const SizedBox(width: 16), // --space-200
                          AnimatedRotation(
                            turns: isOpen ? 0.5 : 0,
                            duration: const Duration(milliseconds: 200),
                            child: const Icon(
                              Icons.keyboard_arrow_down,
                              size: 16,
                              color: Color(0xFF2E2B2B), // --foreground
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  // Content
                  AnimatedCrossFade(
                    duration: const Duration(milliseconds: 200),
                    crossFadeState: isOpen
                        ? CrossFadeState.showFirst
                        : CrossFadeState.showSecond,
                    firstChild: Padding(
                      padding: const EdgeInsets.only(bottom: 16), // --space-200
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          item.content,
                          style: const TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 14,
                            height: 20 / 14,
                            color: Color(0xFF6B6B6B), // --secondary-foreground
                          ),
                        ),
                      ),
                    ),
                    secondChild: const SizedBox.shrink(),
                  ),
                ],
              ),
            );
          }).toList(),
        ),
      ),
    );
  }
}
