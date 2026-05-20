import 'package:flutter/material.dart';

class CarouselVertical extends StatefulWidget {
  const CarouselVertical({super.key});

  @override
  State<CarouselVertical> createState() => _CarouselVerticalState();
}

class _CarouselVerticalState extends State<CarouselVertical> {
  final _controller = PageController();
  int _current = 0;
  final List<int> _items = [1, 2, 3];

  void _prev() {
    if (_current > 0) {
      setState(() => _current--);
      _controller.animateToPage(_current, duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  void _next() {
    if (_current < _items.length - 1) {
      setState(() => _current++);
      _controller.animateToPage(_current, duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      height: 256,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          PageView.builder(
            controller: _controller,
            scrollDirection: Axis.vertical,
            itemCount: _items.length,
            onPageChanged: (i) => setState(() => _current = i),
            itemBuilder: (context, i) => Padding(
              padding: const EdgeInsets.only(top: 16),
              child: Container(
                height: 192,
                decoration: BoxDecoration(
                  color: const Color(0xFFFAFAFA), // --muted
                  borderRadius: BorderRadius.circular(16),
                ),
                alignment: Alignment.center,
                child: Text(
                  '${_items[i]}',
                  style: const TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF2E2B2B),
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            top: -16,
            left: 0,
            right: 0,
            child: Center(
              child: IconButton(
                onPressed: _current > 0 ? _prev : null,
                icon: const Icon(Icons.keyboard_arrow_up),
              ),
            ),
          ),
          Positioned(
            bottom: -16,
            left: 0,
            right: 0,
            child: Center(
              child: IconButton(
                onPressed: _current < _items.length - 1 ? _next : null,
                icon: const Icon(Icons.keyboard_arrow_down),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
