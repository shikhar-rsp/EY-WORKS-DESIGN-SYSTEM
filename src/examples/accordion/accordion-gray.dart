import 'package:flutter/material.dart';

class AccordionGray extends StatefulWidget {
  const AccordionGray({super.key});

  @override
  State<AccordionGray> createState() => _AccordionGrayState();
}

class _AccordionGrayState extends State<AccordionGray> {
  bool _isOpen = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(minWidth: 320, maxWidth: 512),
        child: Container(
          decoration: BoxDecoration(
            color: _isOpen
                ? const Color(0xFFFFFFFF) // --background
                : const Color(0xFFC7C6C6), // --accent-gray-subtle
            borderRadius: BorderRadius.circular(16), // --radius-large
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Header
              Material(
                color: Colors.transparent,
                child: InkWell(
                  borderRadius: _isOpen
                      ? const BorderRadius.vertical(top: Radius.circular(16))
                      : BorderRadius.circular(16),
                  onTap: () => setState(() => _isOpen = !_isOpen),
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 24, // --space-300
                      vertical: 16, // --space-200
                    ),
                    decoration: BoxDecoration(
                      color: const Color(0xFFC7C6C6), // --accent-gray-subtle
                      borderRadius: _isOpen
                          ? const BorderRadius.vertical(top: Radius.circular(16))
                          : BorderRadius.circular(16),
                      boxShadow: _isOpen
                          ? const [
                              BoxShadow(
                                color: Color(0x4F1E1F21),
                                offset: Offset(0, 0),
                                blurRadius: 1,
                              ),
                              BoxShadow(
                                color: Color(0x401E1F21),
                                offset: Offset(0, 1),
                                blurRadius: 1,
                              ),
                            ]
                          : [],
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          'What is a design system?',
                          style: TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 20,
                            fontWeight: FontWeight.w700,
                            height: 24 / 20,
                            color: Color(0xFF2E2B2B), // --foreground
                          ),
                        ),
                        Icon(
                          _isOpen
                              ? Icons.keyboard_arrow_up
                              : Icons.keyboard_arrow_down,
                          size: 32,
                          color: const Color(0xFF2E2B2B), // --foreground
                        ),
                      ],
                    ),
                  ),
                ),
              ),

              // Content
              if (_isOpen)
                const Padding(
                  padding: EdgeInsets.fromLTRB(16, 12, 16, 20), // px-200, gap-150, pb-250
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.',
                      style: TextStyle(
                        fontFamily: 'Lexend',
                        fontSize: 14,
                        height: 20 / 14,
                        color: Color(0xFF7A7272), // --muted-foreground
                      ),
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
