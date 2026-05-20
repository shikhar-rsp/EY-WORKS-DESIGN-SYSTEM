import 'package:flutter/material.dart';

class AccordionMultiple extends StatefulWidget {
  const AccordionMultiple({super.key});

  @override
  State<AccordionMultiple> createState() => _AccordionMultipleState();
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

class _AccordionMultipleState extends State<AccordionMultiple> {
  final Set<String> _openValues = {'item-1'};

  static const List<_AccordionItem> _items = [
    _AccordionItem(
      value: 'item-1',
      trigger: 'Can I open multiple at once?',
      content: 'Yes. Use type="multiple" to allow multiple items to be open simultaneously.',
    ),
    _AccordionItem(
      value: 'item-2',
      trigger: 'Does it support default open items?',
      content: 'Yes. Pass an array to defaultValue to set which items are open by default.',
    ),
    _AccordionItem(
      value: 'item-3',
      trigger: 'Is the state controlled or uncontrolled?',
      content: 'Both. Use defaultValue for uncontrolled, or value + onValueChange for controlled state.',
    ),
  ];

  void _toggle(String value) {
    setState(() {
      if (_openValues.contains(value)) {
        _openValues.remove(value);
      } else {
        _openValues.add(value);
      }
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
            final isOpen = _openValues.contains(item.value);
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
                  InkWell(
                    onTap: () => _toggle(item.value),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 16),
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
                          const SizedBox(width: 16),
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
                  AnimatedCrossFade(
                    duration: const Duration(milliseconds: 200),
                    crossFadeState: isOpen
                        ? CrossFadeState.showFirst
                        : CrossFadeState.showSecond,
                    firstChild: Padding(
                      padding: const EdgeInsets.only(bottom: 16),
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
