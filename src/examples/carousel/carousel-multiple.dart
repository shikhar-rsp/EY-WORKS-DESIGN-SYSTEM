import 'package:flutter/material.dart';

class CarouselMultiple extends StatefulWidget {
  const CarouselMultiple({super.key});

  @override
  State<CarouselMultiple> createState() => _CarouselMultipleState();
}

class _CarouselMultipleState extends State<CarouselMultiple> {
  int _current = 0;
  final int _total = 5;
  final int _visible = 3;

  int get _maxIndex => _total - _visible;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 300,
      child: Column(
        children: [
          Row(
            children: [
              IconButton(
                onPressed: _current > 0 ? () => setState(() => _current--) : null,
                icon: const Icon(Icons.chevron_left),
              ),
              Expanded(
                child: SizedBox(
                  height: 80,
                  child: Row(
                    children: List.generate(_visible, (i) {
                      final n = _current + i + 1;
                      return Expanded(
                        child: Container(
                          margin: const EdgeInsets.only(left: 8),
                          decoration: BoxDecoration(
                            color: const Color(0xFFFAFAFA), // --muted
                            borderRadius: BorderRadius.circular(16), // --radius-large
                          ),
                          alignment: Alignment.center,
                          child: Text(
                            '$n',
                            style: const TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF2E2B2B), // --foreground
                            ),
                          ),
                        ),
                      );
                    }),
                  ),
                ),
              ),
              IconButton(
                onPressed: _current < _maxIndex ? () => setState(() => _current++) : null,
                icon: const Icon(Icons.chevron_right),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
